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
          სამკერვალომ ფუნქციონირება დაიწყო 2021 წელს და მცირე დროში დიდი პოპულარობა მოიპოვა. სამოსის კერვა და ხელნაკეთი ნივთების შექმნა დავიწყე ბავშვობიდან, ჯერ კიდევ სკოლის ასაკში დაახლოებით 8/9 წლის ასაკიდან ვუკერავდი ჩემს თანატოლებს. ეს ის პერიოდია 1993 წელი, როცა მთელი ქვეყანა ნაცრისფერი იყო და ყველაფერი გვენატრებოდა ბავშვებს, ახალი სამოსი თუ სათამაშო. დედაჩემის მამა იყო მეწაღე და კერავდა ფეხსაცმელს, მუდამ ინტერესს იწვევდა და არ ვუშვებდი შესაძლებლობას მისთვის მეყურებინა მუშაობის პროცესში. ჩემი შეკერილი ტანსაცმლით თავს ვიწონებდით თანატოლები.</p>
          <p>
          ატელიეში ძირითადად ვკერავთ ბავშვისა და ქალბატონების ტანსაცმელს. თანამედროვე ტანისამოსთან ერთად, აქცენტი გაკეთებული გვაქვს ქართულ ტრადიციულ სამოსზე. საქორწინო ქართულ ჩოხა-ახალუხთან და საპატარძლო კაბებთან ერთად ვკერავთ ქართულ სამოსს ცეკვის ანსამბლებისათვის. ვიღებთ შეკვეთებს კონკრეტული, სასურველი მოდელის სამოსის შესაკერად. ვქმნით მათზე მორგებულ თარგებს და ვკერავთ ექსკლუზიურ მოდელებს. გვყავს გამოცდილი, კვალიფიციური კადრები. შეკვეთები მიგვიღია უცხო ქვეყნებიდან ონლაინ და ჩვენს შეკერილს სამოსს დიდი მოწონება დაუმსახურებია უცხო ქვეყნებშიც.
          </p>
          <p>
          ამჟამად ვმუშაობ მოთხოვნიდან გამომდინარე შეკვეთებზე როგორც ინდივიდუალური, ასევე კორპორატიული მიმართულებით. ვაპირებ ჩემი საქმიანობის გაფართოებას და მინდა მაღაზიის გახსნა. დიდი მოთხოვნა მაქვს ეროვნული სამოსის მიმართულებით, ასევე საეკლესიო პირები ხშირად მაკითხავენ და მიკვეთავენ სხვადასხვა სამოსს. ვარ თვითნასწავლი მკერავი. კონსტრუირებაც და მოდელირებაც შევისწავლე თვითონ წიგნებიდან და ვიდეოგაკვეთილებიდან. ეს არის ის საქმე, რომელიც მანიჭებს უდიდეს სიამოვნებას და თითოეული მომხმარებლის კმაყოფილება მაძლევს მოტივაციას შევქმა ახალ-ახალი პროდუქტი და განვვითარდე აღნიშნულ სფეროში.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
