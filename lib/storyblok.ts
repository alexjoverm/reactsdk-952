import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

export const initStoryblok = (options = {}) => {
  storyblokInit({
    accessToken: 'NFyJ0ZtX3mudQehnkmxtgQtt',
    use: [apiPlugin],
    ...options,
  });
};
