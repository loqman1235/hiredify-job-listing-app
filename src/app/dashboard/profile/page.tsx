import { validateRequest } from "@/auth";
import EditCandidateProfileForm from "../(components)/EditCandidateProfileForm";
import EditEmployerProfileForm from "../(components)/EditEmployerProfileForm";

const Profile = async () => {
  const { user } = await validateRequest();

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Edit Profile</h3>

      {user?.role === "CANDIDATE" ? (
        <EditCandidateProfileForm />
      ) : (
        <EditEmployerProfileForm />
      )}
    </div>
  );
};
export default Profile;
