import RightChevron from './RightChevron'
const ViewAll = (props: { content: string }) => {
  return (
    <div className="view-all">
      <a href="/">
        {props.content} <RightChevron />
      </a>
    </div>
  )
}

export default ViewAll
