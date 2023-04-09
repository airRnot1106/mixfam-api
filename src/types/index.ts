export type MixfamResponse = {
  state: 200 | 404;
  value: {
    period: string;
    persons: {
      name: string;
      description: string;
      src: string;
    }[];
    musics: {
      time: string;
      musics: {
        title: string;
        artist: string;
      }[];
    }[];
  };
};

export type PeriodResponse = {
  state: 200 | 404;
  value: string[];
};
