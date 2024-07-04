/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lendings?: Maybe<Array<Maybe<Lending>>>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type Lending = {
  __typename?: 'Lending';
  book?: Maybe<Book>;
  borrowedAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  member?: Maybe<Member>;
  returnedAt?: Maybe<Scalars['String']['output']>;
};

export type LendingInput = {
  bookId?: InputMaybe<Scalars['ID']['input']>;
  borrowedAt?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['ID']['input']>;
  returnedAt?: InputMaybe<Scalars['String']['input']>;
};

export type Member = {
  __typename?: 'Member';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lendings?: Maybe<Array<Maybe<Lending>>>;
  name?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type MemberInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<Book>;
  createLending?: Maybe<Lending>;
  createMember?: Maybe<Member>;
  deleteBook?: Maybe<Book>;
  deleteLending?: Maybe<Lending>;
  deleteMember?: Maybe<Member>;
  updateBook?: Maybe<Book>;
  updateLending?: Maybe<Lending>;
  updateMember?: Maybe<Member>;
};


export type MutationCreateBookArgs = {
  input?: InputMaybe<BookInput>;
};


export type MutationCreateLendingArgs = {
  input?: InputMaybe<LendingInput>;
};


export type MutationCreateMemberArgs = {
  input?: InputMaybe<MemberInput>;
};


export type MutationDeleteBookArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteLendingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateBookArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<BookInput>;
};


export type MutationUpdateLendingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<LendingInput>;
};


export type MutationUpdateMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<MemberInput>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  lending?: Maybe<Lending>;
  lendings?: Maybe<Array<Maybe<Lending>>>;
  member?: Maybe<Member>;
  members?: Maybe<Array<Maybe<Member>>>;
};


export type QueryBookArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLendingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};
