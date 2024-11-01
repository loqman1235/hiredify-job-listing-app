import { validateRequest } from "@/auth";
import EditCandidateProfileForm from "../_components/EditCandidateProfileForm";
import EditEmployerProfileForm from "../_components/EditEmployerProfileForm";
import prisma from "@/lib/prisma";

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

  const employerProfile = await prisma.employerProfile.findUnique({
    where: {
      employerId: user?.id,
    },
    include: {
      employer: {
        select: {
          avatar: true,
        },
      },
    },
  });

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Edit Profile</h3>

      {user?.role === "CANDIDATE" && (
        <EditCandidateProfileForm candidateProfile={candidateProfile} />
      )}

      {user?.role === "EMPLOYER" && (
        <EditEmployerProfileForm employerProfile={employerProfile} />
      )}
    </div>
  );
};
export default Profile;
