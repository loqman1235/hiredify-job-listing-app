import EditProfileForm from "../(components)/EditProfileForm";

const profile = () => {
  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Edit Profile</h3>

      <div className="w-full rounded-lg bg-foreground p-5 shadow">
        <h4 className="text-lg font-semibold tracking-tight">My Profile</h4>

        {/* EDIT PROFILE FORM */}
        <EditProfileForm />
      </div>
    </div>
  );
};

export default profile;
