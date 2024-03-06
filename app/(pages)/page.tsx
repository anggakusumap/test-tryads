import DashboardLayout from "../_components/templates/DashboardLayout";
import Navbar from "../_components/organisms/Navbar";
import MainContent from "../_components/organisms/MainContent";
import Aside from "../_components/organisms/Aside";

export default function Home() {
  return (
    <DashboardLayout>
      <Navbar />
      <MainContent />
      <Aside />
    </DashboardLayout>
  );
}
