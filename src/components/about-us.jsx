import image from "../assets/about-image.jpg";
import useFetch from "../hooks/useFetch";

const AboutUs = () => {
  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/about-me",
    method: "GET",
  });

  const aboutMeContent = fetchRequest?.items[0];
  console.log(aboutMeContent);

  return (
    <div className="about-us container">
      <img
        src={fetchRequest ? aboutMeContent.imageUrl : image}
        alt="something"
      />
      {fetchRequest ? (
        <div className="about-us-text">
          <p>{aboutMeContent.firstInfo}</p>
          <p>{aboutMeContent.secondInfo}</p>
          <p>{aboutMeContent.thirdInfo}</p>
        </div>
      ) : (
        <div className="about-us-text">
          <p>
          მოგესალმებით, ჩვენ გახლავართ მცირე სამკერვალო Rus-Ka. ჩვენი
           სამკერვალო მდებარეობს ქარელში, თამარმეფის ქ. N 60.-ში.
            სამების ტაძრის პირდაპირ. ადვილად მიგნებად ადგილას, 
            ქალაქის ცენტრში. სამკერვალომ ფუნქციონირება დაიწყო 2021 
            წელს და მცირე დროში დიდი პოპულარობა მოიპოვა.
             გვყავს ბევრი კმაყოფილი მომხმარებელი სხვადასხვა ასაკის. 
             როგორც პატარები ასევე ზრდასრული და ხანში შესული ადამიანები. ძირითადად ვკერავთ ბავშვისა და ქალბატონების ხაზით. თანამედროვე ტანისამოსთან ერთად, აქცენტი გაკეთებული გვაქვს ქართულ, ტრადიციულ სამოსზე. (საქორწინო ქართულ ჩოხა-ახალუხთან და საპატარძლო კაბებთან ერთად ვკერავთ ქართულ სამოსს ცეკვის ანსამბლებისათვის). გვაქვს სოციალურ ქსელში ინსტაგრამ და ფეისბუკ გვერდები, სადაც ეტაპობრივად ვდებთ ინფოემაციას ჩვენი სამკერვალოს და ჩვენს მიერ შექმნილი სამოსის შესახებ. ადგილზე მოსვლის და შეკვეთის გარდა ვიღებთ ონლაინ შეკვეთებს. ვიღებთ შეკვეთებს კონკრეტული, სასურველი მოდელის სამოსის შესაკერად. ვქმნით მათზე მორგებულ თარგებს და ვკერავთ ექსკლუზიურად მისთვის სასურველ მოდელს. გვყავს გამოცდილი, კვალიფიციური კადრები. ვმუშაობთ მხოლოდ მაღალი ხარისხის მასალით და ვქმნით ხარისხიან პროდუქციას, მაღალი ტექნოლოგიური დამუშავებით. შეკვეთები მიგვიღია უცხო ქვეყნებიდან ონლაინ და ჩვენს შეკერილს სამოსს დიდი მოწონება დაუმსახურებია უცხო ქვეყნებშიც. ჩვენ გამოვირჩევით პროდუქციის მაღალი ხარისხით და სხვა კონკურენტებთან შედარებით დაბალი ფასით პროდუქციაზე.
          </p>
          <p>
          ბრენდის შქმნის ისტორია სამოსის კერვა და ხელნაკეთი ნივთების შექმნა დავიწყე ბავშვობიდან, ჯერ კიდევ სკოლის ასაკში დაახლოებით 8/9 წლის ასაკიდან, ვუკერავდი ჩემს თანატოლებს. ეს ის პერიოდია 1993 წელი როცა მთელი ქვეყანა ნაცრისფერი იყო და ყველაფერი გვენატრებოდა ბავშვებს, ახალი სამოსი თუ სათამაშო. დედას ჰქონდა ხელის ძველი საკერავი მანქანა, რითაც ვკარავდი. პირველი ნაბიჯების გადადგმაში დედა დამეხმარა (მან იცის კერვა მცირე დოზით), მასწავლა საკერავი მანქანის გამოყენება და თარგების გამოჭრა. დედაჩემის მამა იყო მეწაღე და კერავდა ფეხსაცმელს, მუდამ ინტერესს იწვევდა და არ ვუშვებდი შესაძლებლობას მისთვის მეყურებინა მუშაობის პროცესში. ჩემი შეკერილი ტანსაცმლით თავს ვიწონებდით თანატოლები. როცა სკოლა დავამთავრე ჩემს კლასელებსაც შევუკერე საბანკეტო კაბები. მიუხედავად კერვის სიყვერულისა და დიდი სურვილისა რომ ვყოფილიყავი ქალის თანსაცმლის დიზაინერი, არ მომიხერხდა სწავლა გამეგრძელებინა ამ მიმართულებით. მაგრამ მთელს ჩემს ცხოვრებას პარალელად გასდევდა კერვა, ქსოვა და ხელსაქმე. უნივერსიტეტის დამთავრების შემდეგ მუშაობა დავიწყე ადგილობრივ მერიაში საფინანსო სამსახურში. წლების განმავლობაში მქონდა სურვილი რომ მქონოდა ჩემი პატარა სამკერვალო სახელოსნო. რამდენჯერმე დავწერე პროექტი აწარმოე საქართველოში და არ დამიფინანსდა. მაგრამ მიუცედავად ამისა არასოდეს მიფიქრია რომ ამ დაფინანსებას არ ვიმსახურებდი. ეს უფრო მეტ ძალას მაძლევდა რომ მიმეღო ის რაც ასე ძალიან მინდოდა. როცა პანდემია დაიწყო მომიწია უმეტესი დროის სახლში გატარება და კიდევ უფრო დავფიქრდი რა ძალიან მნიშვნელოვანი იქნებოდა მეკეთებინა საქმე რაც სიამოვნებას მომანიჭებდა. ერთ მშვენიერ დღეს ესე უცაბედად გამოვუცხადე ოჯახის წევრებს რომ მე აუცილებლად უნდა შემეძინა სამკერვალოს ინვენტარი და აღარც კი მომისმენია მათი რჩევის ისე შევუკვეთე დისტანციურად მაღაზიას ორი საკერავი მანქანა, 2021 წლის მაისის თვეში. როგორც კი მანქანები ჩემამდე მოვიდა შევიძინე რამდენიმე კაბის ქსოვილი, ჩემი გემოვნებით ჩემივე ზომის შევკერე და დავდე ერთერთ ჯგუფში ,,მე მიყვარს კერვა“, ამ ჯგუფში არიან როგორც დიზაინერები, მკერავები, ასევე ადამიანები ვინდა უკვეთავს და აკერინებს. გადავიღე მცირე ვიდეო, დავადე მუსიკა და ავტვირთე ღამის 4 საათზე. როცა დილა გათენდა და არც კი ველოდი რომ ვინმეს საერთოდ ნანახი ჰქონდა, ჩემს ვიდეოზე დამხვდა 400-მდე კომენტარი, სიხარულით ვტიროდი. ასე დაიწყო ჩემი საქმიანობა. დღეს ქარელის მაშტაბით მაქვს შეკვეთები და მყავს ძალიან კმაყოფილი მომხმარებლები. ამჟამად ვმუშაობ მოთხოვნიდან გამომდინარე შკვეთებზე როგორც ინდივიდუალური, ასევე კორპორატიული. ვაპირებ ჩემი საქმიანობის გაფართოებას და მინდა ჩემი ნაწარმის მაღაზიის გახსნა. დიდი მთხოვნა მაქვს ეროვნული სამოსის მიმართულებით, ასევე საეკლესიო პირები ხშირად მაკითხავენ და მიკვეთავენ სხვადასხვა სამოსს.
          </p>
          <p>
          ვარ თვითნასწავლი. კონსტრუირებაც და მოდელირებაც შევისწავლე თვითონ წიგნებიდან და ვიდეოგაკვეთილებიდან. შარშან 2023 წელს გავიარე სამთვიანი კურსი კოლეჯ განთიადში. მაინტერესებდა პროფესიულად რა მიდგომები იყო ამ სფეროში.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
