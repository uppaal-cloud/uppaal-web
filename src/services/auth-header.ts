const authHeader = (user?: any) => {
    const localUser = JSON.parse(localStorage.getItem('user')!);
    //
    if (!localUser || !localUser.token) return;

    return { 'x-access-token': localUser.token };
};

export default authHeader;
