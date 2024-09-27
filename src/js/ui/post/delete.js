import { deletePost } from "../../api/post/delete";


export async function onDeletePost(id) {
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    
    if (confirmDelete) {
        await deletePost(id); 
    } else {
        console.log('User canceled the delete action.');
    }
}



