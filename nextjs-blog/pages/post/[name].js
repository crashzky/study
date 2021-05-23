export default function Post(props) {
    return <h1>{props.label}</h1>;
}

export async function getStaticPaths() {
    let _data = [];
    await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
        .then(data => {
            _data = data.map(i => ({
                params: {
                    name: `${i.id}`
                }
            }));
        });
    return {
        paths: _data,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    let label;
    await fetch(`https://jsonplaceholder.typicode.com/todos/${params.name}`)
        .then(data => data.json())
        .then(data => {
            label = data.title
        });

    return {
        props: {
            params,
            label
        }
    };
}