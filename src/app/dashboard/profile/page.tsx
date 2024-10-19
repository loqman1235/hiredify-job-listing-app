import { validateRequest } from "@/auth";
import EditCandidateProfileForm from "../(components)/EditCandidateProfileForm";
import EditEmployerProfileForm from "../(components)/EditEmployerProfileForm";
import prisma from "@/libs/prisma";

const Profile = async () => {
  const { user } = await validateRequest();

  const candidateProfile = await prisma.candidateProfile.findUnique({
    where: {
      candidateId: user?.id,
    },
  });

  if (!candidateProfile) return null;

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Edit Profile</h3>

      {user?.role === "CANDIDATE" ? (
        <EditCandidateProfileForm candidateProfile={candidateProfile} />
      ) : (
        <EditEmployerProfileForm />
      )}
    </div>
  );
};
export default Profile;
