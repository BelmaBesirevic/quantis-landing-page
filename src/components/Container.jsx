const Container = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: 'inherit',
        padding: '0px 20px',
      }}
    >
      {children}
    </div>
  )
}
export default Container
