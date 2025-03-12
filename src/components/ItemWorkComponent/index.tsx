import './style.scss'
import vector from '/assets/icon/vector.svg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ItemWorkComponent = ({ item }: { item: any }) => {
  return (
    <div className="item-work-component">
      <div className="item-work-component__image">
        <div className="item-work-component__image-logo">
          <img src={item?.logo} alt="logo" />
        </div>
      </div>
      <div className="item-work-component__detail">
        <div className="item-work-component__detail-title">{item?.company}</div>
        <div className="item-work-component__detail-button">
          <span>{item?.position}</span>
          <img style={{ margin: '0 18px' }} src={vector} alt="vector" />
          <span>
            {item?.startDate} - {item?.endDate}
          </span>
        </div>
        <div className="item-work-component__detail-description">
          {item?.description}
        </div>
      </div>
    </div>
  )
}

export default ItemWorkComponent
