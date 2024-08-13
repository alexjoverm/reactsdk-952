import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
  StoryblokStory,
} from '@storyblok/react/rsc';
import { initStoryblok } from '../lib/storyblok';
import Link from 'next/link';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <StoryblokStory story={data.story} />
      <Link href={'/test'}>Go to test (next link)</Link>
      <a href={'/test'}>Go to test (standard a tag)</a>
    </div>
  );
}

export async function fetchData() {
  // initStoryblok(); // initialize API
  let sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
