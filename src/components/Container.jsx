const Container = ({ children }) => {
  return (
    <div id="main-container"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: 'inherit',
      }}
    >
      {children}
    </div>
  )
}
export default Container
