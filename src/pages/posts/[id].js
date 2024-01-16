import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../../utils/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    console.log(postData)
    return (
      <>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </>
    );
  }