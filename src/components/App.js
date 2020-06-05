import React, {useState} from 'react'
import ResourceList from './ResourceList'

const App = () => {
    const [resource, setresource] = useState('posts')

    return (
        <div>
            <div>
                <button onClick={() => setresource('posts')}>Posts</button>
                <button onClick={() => setresource('todos')}>Todos</button>
            </div>
            <ResourceList resource = {resource} />
        </div>
    )
}

export default App




