const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    if (!user || !user.token) return;

    return { 'x-access-token': user.token };
};

export default authHeader;
