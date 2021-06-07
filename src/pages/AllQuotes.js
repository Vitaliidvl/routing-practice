import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Vitalii', text: 'Lerning React i fun!' },
  { id: 'q2', author: 'Mariia', text: 'Lerning React i super cool!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
