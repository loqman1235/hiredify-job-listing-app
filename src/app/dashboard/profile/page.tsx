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
    include: {
      candidate: {
        select: {
          avatar: true,
        },
      },
    },
  });

  console.log(candidateProfile);

  const employerProfile = await prisma.employerProfile.findUnique({
    where: {
      employerId: user?.id,
    },
    include: {
      companyImage: true,
    },
  });

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Edit Profile</h3>

      {user?.role === "CANDIDATE" && candidateProfile && (
        <EditCandidateProfileForm candidateProfile={candidateProfile} />
      )}

      {user?.role === "EMPLOYER" && employerProfile && (
        <EditEmployerProfileForm employerProfile={employerProfile} />
      )}
    </div>
  );
};
export default Profile;
