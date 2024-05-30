import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/4 min-h-screen bg-gray-300 text-white">
                <Navbar />
            </div>
            <div className="w-3/4 p-4 bg-gray-300">
                {children}
            </div>
        </div>
    );
};

export default Layout;
