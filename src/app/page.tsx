'use client'

import { gql, useQuery } from '@apollo/client'

import { Book } from '@/__generated__/graphql'
import { ENV } from '@/libs'

export default function AppPage() {
  return (
    <main className='min-h-screen flex flex-col p-24 gap-6'>
      <BookList />
    </main>
  )
}

const LoadingIndicator = () => <div className='h-10 w-10 border-4 border-t-gray-950 rounded-full animate-spin mx-auto' />

const BookList = () => {
  const GET_ALL_BOOK = gql`
    query GetAllBook {
      books {
        id
        title
        author
        category
        total
        publishedAt
      }
    }
  `

  const { data, loading, error } = useQuery(GET_ALL_BOOK, { context: { headers: { Authorization: ENV.NEXT_PUBLIC_GRAPHQL_TOKEN } } })

  if (loading) return <LoadingIndicator />

  if (error) return <p className='text-center'>Something went wrong</p>

  const books: Book[] = data?.books

  return books.map(({ id, title, author, category, total, publishedAt }) => (
    <div key={id} className='flex flex-col gap-3 bg-gray-100 shadow p-6 rounded'>
      <h3>Title : {title}</h3>
      <p>Author : {author}</p>
      <p>Category : {category}</p>
      <p>Total : {total}</p>
      <p>Published At : {publishedAt}</p>
    </div>
  ))
}
