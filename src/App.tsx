import { RouterProvider } from 'react-router-dom'
import useRouter from './hooks/use_router';
import StorageProvider from './context/storage_context';
import AuthContextProvider from './context/auth_context';

export default function App() {
    const router = useRouter()

    return (
        <StorageProvider>
            <AuthContextProvider>
                <RouterProvider router={router} />
            </AuthContextProvider>
        </StorageProvider>
    );
}
