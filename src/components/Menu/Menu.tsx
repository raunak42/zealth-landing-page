export const Menu: React.FC = () => {
  return (
    <div className="space-x-8 text-[#fc516d] font-semibold ">
      <button className="hover:text-blue-600" >Home</button> 
      <button className="hover:text-blue-600" >Patients</button>
      <button className="hover:text-blue-600" >Clinicians</button>
      <button className="hover:text-blue-600" >Insurance</button>
      <button className="hover:text-blue-600" >Clinical Trials</button>
      <button className="hover:text-blue-600" >News</button>
    </div>
  );
};
