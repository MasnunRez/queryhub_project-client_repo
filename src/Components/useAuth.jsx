import React, { use } from 'react';
import { valueContext } from '../Layout';

const useAuth = () => {
    const authInfo = use(valueContext)
    return authInfo
};

export default useAuth;