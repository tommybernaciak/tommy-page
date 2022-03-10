export type BlogPostListElement = {
	title: string;
	intro: string;
	date: string;
	url: string;
	content: BlogPostPart[];
};

export type BlogPostPart = Title | Subtitle | Paragraph | Codeblock | Date;

export type Title = { type: PARTS.TITLE; content: string };
export type Subtitle = { type: PARTS.SUBTITLE; content: string };
export type Paragraph = { type: PARTS.PARAGRAPH; content: string };
export type Codeblock = { type: PARTS.CODEBLOCK; content: string; language: SupportedLanguages };
export type Date = { type: PARTS.DATE; content: string };

export enum PARTS {
	DATE = 'date',
	TITLE = 'title',
	SUBTITLE = 'subtitle',
	PARAGRAPH = 'paragraph',
	CODEBLOCK = 'codeblock'
}

export type SupportedLanguages =
	| 'bash'
	| 'c'
	| 'clojure'
	| 'cpp'
	| 'css'
	| 'csharp'
	| 'dart'
	| 'elixir'
	| 'elm'
	| 'erlang'
	| 'fsharp'
	| 'graphql'
	| 'go'
	| 'groovy'
	| 'haskell'
	| 'html'
	| 'java'
	| 'javascript'
	| 'jsx'
	| 'julia'
	| 'kotlin'
	| 'lisp'
	| 'makefile'
	| 'matlab'
	| 'objectivec'
	| 'ocaml'
	| 'php'
	| 'python'
	| 'r'
	| 'ruby'
	| 'rust'
	| 'scala'
	| 'sql'
	| 'swift'
	| 'tsx'
	| 'typescript';
