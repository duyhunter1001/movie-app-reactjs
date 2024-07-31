import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const RootLayout = () => {
  return (
    <div className="bg-overview">
        <Header />
        <div className="mx-auto min-h-svh max-w-screen-2xl shadow-md relative">
            <Outlet />
        </div>
    </div>
  )
}