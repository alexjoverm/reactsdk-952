/** 1. Tag it as client component */
'use client';
import { initStoryblok } from '../src/storyblok.js';

/** 2. Import your components */
import Page from './Page';
import Teaser from './Teaser';

/** 3. Initialize it as usual */
initStoryblok({
  components: {
    teaser: Teaser,
    page: Page,
  },
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
