import UserProfileComponent from "@/components/UserProflieComponent";

const UserProfilePage = () => {
    const user = { id: 1, name: "xayvue", email: "xayvue@gmail.com"};
    return (
        <div>
        <UserProfileComponent user={user}/>
    </div>
    )
    
};

export default UserProfilePage;