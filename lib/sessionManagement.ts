
enum accessLevel {
  user,
  companyUser,
  companyAdmin,
  admin
}

interface Session {
  id: string,
  name: string,
  userName: string,
  company: string,
  accessLevel: accessLevel,
};

function GenerateSession(): Session {
  return { id: "1", name: "", userName: "", company: "", accessLevel: accessLevel.user };

};

void function setSession() {

};

function getSession(): Session {
  return { id: "1", name: "", userName: "", company: "", accessLevel: accessLevel.user };

};
