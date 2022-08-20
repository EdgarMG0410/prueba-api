import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home, Posts, Gallery, Todos } from '../pages'

export const AppRouter = () => {
    return (
        <div>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/todos" element={<Todos />} />
                </Routes>
            </div>
        </div>
    )
}
