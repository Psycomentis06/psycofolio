
export async function load({route}) {
    
    if (/^\/admin/.test(route.id || '')) {
        console.log("admin layout");
    }
    return {
        posts: {
            title: 'Posts',
            href: '/posts',
        }
    };
}