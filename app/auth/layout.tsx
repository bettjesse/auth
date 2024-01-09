interface AuthLayoutProps {
    children : React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className=" h-full flex justify-center items-center bg-red-400">{children}</div>
  )
}

export default AuthLayout