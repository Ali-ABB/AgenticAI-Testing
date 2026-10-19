import { test, expect } from '@playwright/test';
import scenarios from '../data/agent-scenarios.json';

interface AgentScenario {
  id: string;
  category: string;
  goal: string;
  allowed_tools: string[];
  expected_tool_calls: string[];
  must_include: string[];
  must_not_include: string[];
}

test.describe('AgenticAI smoke scaffold', () => {
  test('loads agent scenarios from golden data', async () => {
    const data = scenarios as AgentScenario[];
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].id).toBe('AGENT-001');
  });

  for (const scenario of scenarios as AgentScenario[]) {
    test(`[${scenario.id}] placeholder — wire agent endpoint here`, async () => {
      test.info().annotations.push({
        type: 'note',
        description: 'Replace this placeholder with a real agent API call and tool-call assertions.',
      });

      expect(scenario.goal, 'scenario goal should be defined').toBeTruthy();
      expect(scenario.allowed_tools.length).toBeGreaterThan(0);
    });
  }
});
