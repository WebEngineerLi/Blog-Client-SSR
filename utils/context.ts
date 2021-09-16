import { createContext } from 'react';

export const BlogContext = createContext<{blogList: any[]}>({ blogList: [] })