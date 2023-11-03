import { Button } from "@/components/ui/button";
import LocalSearch from "@/app/components/shared/search/LocalSearch";
import Filter from "@/app/components/shared/Filter";
import HomeFilters from "@/app/components/home/HomeFilters";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import NoResult from "@/app/components/shared/NoResult";
import QuestionCard from "@/app/components/cards/QuestionCard";

const mockQuestions = [
  {
    _id: "1",
    title: "What are the best practices for code version control in Git?",
    tags: [{ _id: "101", name: "Git" }],
    author: { _id: "201", name: "CodeMaster", avatar: "avatar-url" },
    upVotes: 78,
    views: 250,
    answers: [],
    createdAt: new Date(2023, 0, 1),
    otherClasses: "featured",
    link: "https://example.com/git-best-practices",
    linkTitle: "Learn More",
  },
  {
    _id: "2",
    title: "How do you optimize database queries for performance?",
    tags: [{ _id: "102", name: "Database" }],
    author: { _id: "202", name: "DBExpert", avatar: "avatar-url" },
    upVotes: 65,
    views: 21056251,
    answers: [],
    createdAt: new Date(2023, 2, 1),
    link: "https://example.com/database-optimization-tips",
    linkTitle: "Explore Techniques",
  },
  {
    _id: "3",
    title: "What are the latest trends in front-end web development?",
    tags: [{ _id: "103", name: "Front-end" }],
    author: { _id: "203", name: "WebWizard", avatar: "avatar-url" },
    upVotes: 887687687,
    views: 280,
    answers: [],
    createdAt: new Date(2023, 4, 1),
    otherClasses: "recommended",
    link: "https://example.com/latest-front-end-trends",
    linkTitle: "Read More",
  },
  {
    _id: "4",
    title:
      "How do you handle security vulnerabilities in software applications?",
    tags: [{ _id: "104", name: "Security" }],
    author: { _id: "204", name: "SecureCoder", avatar: "avatar-url" },
    upVotes: 72,
    views: 2258768,
    answers: [],
    createdAt: new Date(2022, 11, 31),
    link: "https://example.com/security-best-practices",
    linkTitle: "Secure Your Code",
  },
  {
    _id: "5",
    title: "What are the key differences between REST and GraphQL APIs?",
    tags: [{ _id: "105", name: "APIs" }],
    author: { _id: "205", name: "APIEnthusiast", avatar: "avatar-url" },
    upVotes: 87261520,
    views: 260,
    answers: [],
    createdAt: new Date(2023, 10, 1),
    link: "https://example.com/rest-vs-graphql",
    linkTitle: "Explore Comparison",
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          placeholder="Search Questions"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {mockQuestions.length > 0 ? (
          mockQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upVotes={question.upVotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There are no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
