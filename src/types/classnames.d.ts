declare module 'classnames' {
  export default function cn(
    ...args: Array<
      | string
      | number
      | boolean
      | null
      | undefined
      | Record<string, unknown>
      | Array<string | number | boolean | null | undefined | Record<string, unknown>>
    >
  ): string;
}
