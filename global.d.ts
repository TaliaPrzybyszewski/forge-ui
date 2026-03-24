// CSS module and side-effect import declarations
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
