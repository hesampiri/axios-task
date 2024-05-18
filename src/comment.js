function Comment({info}){
    return(
        <>
        <div className='bg-blue-200 p-4 mt-5 mx-2 border-2 border-blue-700 rounded '>
            <h1 className='text-lg font-bold text-red-500' >comment</h1>
            <h1 className='font-bold text-lg'>postId:</h1>
            <p>{info.name ? info.postId : 'empty'}</p>
            <h1 className='font-bold text-lg'>Id :</h1>
            <p>{info.name ? info.id : 'empty'}</p>
            <h1 className='font-bold text-lg'>name :</h1>
            <p>{info.name ? info.name : 'empty'}</p>
            <h1 className='font-bold text-lg'>email: </h1>
            <p>{info.email ? info.email : 'empty'}</p>
            <h1 className='font-bold text-lg'>Body:</h1>
            <p>{info.body ? info.body : 'empty'}</p>
        </div>
        </>
    )
}

export default Comment