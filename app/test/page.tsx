import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
  StoryblokStory,
} from '@storyblok/react/rsc';
import { initStoryblok } from '../../src/storyblok';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  initStoryblok(); // initialize API
  let sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
