import {transformUserEventData, getGitHubUserEvents} from './gitHubFetchCaller';

describe('transformUserEventData', ()  => {
  const dataFilters = ['ForkEvent', 'PullRequestEvent'];

  describe('When there is data it should return an object sorted by the filters', () => {
    it('Transform function should only return the events filerted for', () => {
      const testData = [
        {
         "type": "PushEvent",
        },
        {
          "type": "ForkEvent",
        },
        {
          "type": "OtherEvent",
        },
        {
          "type": "PullRequestEvent",
        }
      ];
      const result = transformUserEventData(dataFilters, testData);
      const expectOutput = {"ForkEvent": [{"type": "ForkEvent"}], "PullRequestEvent": [{"type": "PullRequestEvent"}]};

      expect(result).toMatchObject(expectOutput);
      expect(result).toHaveProperty("ForkEvent", [{"type": "ForkEvent"}]);
      expect(result).toHaveProperty("PullRequestEvent", [{"type": "PullRequestEvent"}]);
    });
  });
});