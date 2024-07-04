'use client'

import { Suspense } from 'react'
import { gql, useSuspenseQuery } from '@apollo/client'

import { Book } from '@/__generated__/graphql'

export default function AppPage() {
  return (
    <main className='min-h-screen flex flex-col p-24 gap-6'>
      <Suspense fallback={<LoadingIndicator />}>
        <BookList />
      </Suspense>
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

  const { data }: { data: { books: Book[] } } = useSuspenseQuery(GET_ALL_BOOK)

  return data.books.map(({ id, title, author, category, total, publishedAt }) => (
    <div key={id} className='flex flex-col gap-3 bg-gray-100 shadow p-6 rounded'>
      <h3>Title : {title}</h3>
      <p>Author : {author}</p>
      <p>Category : {category}</p>
      <p>Total : {total}</p>
      <p>Published At : {publishedAt}</p>
    </div>
  ))
}
