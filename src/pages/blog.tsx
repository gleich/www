import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Center from '@components/Center'
import Meta from '@components/Meta'
import Glow from '@components/Glow'
import getBlogPosts, { BlogPost } from '@data/blog'
import Article from '@components/pages/blog/Article'

const Blog: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <style jsx>
        {`
          main {
            padding-top: 10vh;
            min-width: 40vw;
            margin: 0 20px;
          }
        `}
      </style>
      <Meta title="Matt's blog" description="Matt Gleich's writings" />
      <Center>
        <main>
          <div className="heading">
            <Glow>
              <h1>Blog</h1>
            </Glow>
            <p>A collection of some of my writing</p>
          </div>
          {posts.map((a: BlogPost) => (
            <Article key={a.slug} post={a} />
          ))}
        </main>
      </Center>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getBlogPosts(),
    },
  }
}

export default Blog
