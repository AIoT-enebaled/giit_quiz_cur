import React from 'react';
import Editor from '@monaco-editor/react';
import { Play, Copy } from 'lucide-react';

interface CodeEditorProps {
  defaultValue?: string;
  height?: string;
}

export default function CodeEditor({ defaultValue = '', height = '300px' }: CodeEditorProps) {
  const [code, setCode] = React.useState(defaultValue);
  const [output, setOutput] = React.useState('');
  const [isRunning, setIsRunning] = React.useState(false);

  const evaluateExpression = (expr: string): string => {
    try {
      // Handle len() function
      const lenMatch = expr.match(/len\(['"]([^'"]*)['"]\)/);
      if (lenMatch) {
        return lenMatch[1].length.toString();
      }

      // Handle string multiplication
      const multiplyMatch = expr.match(/(\d+)\s*\*\s*(['"])(.*?)\2/);
      if (multiplyMatch) {
        const [_, count, quote, str] = multiplyMatch;
        return str.repeat(parseInt(count));
      }

      // Handle list operations
      if (expr.startsWith('[') && expr.endsWith(']')) {
        const list = JSON.parse(expr.replace(/'/g, '"'));
        return JSON.stringify(list);
      }

      // Handle type() function
      const typeMatch = expr.match(/type\((.*)\)/);
      if (typeMatch) {
        const value = typeMatch[1].trim();
        if (value.match(/^-?\d+$/)) return "<class 'int'>";
        if (value.match(/^-?\d*\.\d+$/)) return "<class 'float'>";
        if (value.match(/^['"].*['"]$/)) return "<class 'str'>";
        if (value.match(/^\[.*\]$/)) return "<class 'list'>";
        if (value === 'True' || value === 'False') return "<class 'bool'>";
        return "<class 'object'>";
      }

      // Handle basic arithmetic
      if (expr.match(/^[\d\s+\-*/%()]+$/)) {
        return eval(expr).toString();
      }

      // Handle boolean operations
      if (expr.includes(' and ') || expr.includes(' or ') || expr.includes('not ')) {
        const evalExpr = expr
          .replace(/ and /g, ' && ')
          .replace(/ or /g, ' || ')
          .replace(/not /g, '!');
        return eval(evalExpr).toString();
      }

      // Handle string operations
      if (expr.includes('.')) {
        const [str, method] = expr.split('.');
        const cleanStr = str.slice(1, -1); // Remove quotes
        
        if (method.startsWith('upper()')) return `"${cleanStr.toUpperCase()}"`;
        if (method.startsWith('lower()')) return `"${cleanStr.toLowerCase()}"`;
        if (method.startsWith('strip()')) return `"${cleanStr.trim()}"`;
      }

      // Handle string literals and f-strings
      if (expr.startsWith("'") || expr.startsWith('"')) {
        return expr.slice(1, -1);
      }
      if (expr.startsWith('f"') || expr.startsWith("f'")) {
        const content = expr.slice(2, -1);
        return content.replace(/\{([^}]+)\}/g, (_, variable) => {
          try {
            return eval(variable).toString();
          } catch {
            return `{${variable}}`;
          }
        });
      }

      // Handle comparisons
      if (expr.includes(' > ') || expr.includes(' < ') || expr.includes(' == ') || 
          expr.includes(' >= ') || expr.includes(' <= ') || expr.includes(' != ')) {
        return eval(expr).toString();
      }

      // Handle list/string slicing
      const sliceMatch = expr.match(/(.*)\[(.*?)\]/);
      if (sliceMatch) {
        const [_, target, slice] = sliceMatch;
        const evalTarget = target.startsWith('"') || target.startsWith("'") 
          ? target.slice(1, -1)
          : eval(target);
        
        if (slice.includes(':')) {
          const [start, end] = slice.split(':').map(s => s ? parseInt(s) : undefined);
          return JSON.stringify(evalTarget.slice(start, end));
        } else {
          return JSON.stringify(evalTarget[parseInt(slice)]);
        }
      }

      return expr;
    } catch (error) {
      return `Error: ${(error as Error).message}`;
    }
  };

  const simulatePythonOutput = (code: string) => {
    const lines = code.split('\n');
    let simulatedOutput = '';
    let variables: Record<string, any> = {};

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine.startsWith('#')) continue;

      try {
        if (trimmedLine.startsWith('print(')) {
          const match = trimmedLine.match(/print\((.*)\)/);
          if (match) {
            const expression = match[1].trim();
            const result = evaluateExpression(expression);
            simulatedOutput += result + '\n';
          }
        } else if (trimmedLine.includes('=')) {
          const [varName, value] = trimmedLine.split('=').map(s => s.trim());
          variables[varName] = eval(value);
        }
      } catch (error) {
        simulatedOutput += `Error: ${(error as Error).message}\n`;
      }
    }

    return simulatedOutput || 'No output';
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const result = simulatePythonOutput(code);
      setOutput(`> Python Output:\n${result}`);
    } catch (error) {
      setOutput('Error running code: ' + (error as Error).message);
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-700">
      <div className="bg-gray-800 p-2 flex justify-between items-center">
        <span className="text-gray-300 text-sm">Python Editor</span>
        <div className="flex gap-2">
          <button
            onClick={handleCopyCode}
            className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors flex items-center gap-1"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`px-3 py-1 text-sm rounded flex items-center gap-1 ${
              isRunning
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-600 text-white hover:bg-cyan-500'
            }`}
          >
            <Play className="w-4 h-4" />
            Run
          </button>
        </div>
      </div>
      
      <Editor
        height={height}
        defaultLanguage="python"
        theme="vs-dark"
        value={code}
        onChange={value => setCode(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          wordWrap: 'on'
        }}
      />

      {output && (
        <div className="bg-gray-900 p-4 border-t border-gray-700">
          <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}