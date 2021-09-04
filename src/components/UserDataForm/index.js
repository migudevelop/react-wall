import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import EditField from 'components/EditField'
import { Wrapper, CustomColumns, LongTwoColumn } from './styles'

const UserDataForm = ({ user, editing }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (values) => console.log(values)

  const { name, email, phone, location } = user
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomColumns tabletNumCol={2} desktopNumCol={3}>
          <EditField
            label="First Name"
            name="first"
            value={name?.first}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
          <EditField
            label="Last Name"
            name="last"
            value={name?.last}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
          <EditField
            label="Phone"
            name="phone"
            value={phone}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
        </CustomColumns>
        <LongTwoColumn>
          <EditField
            label="Postcode"
            name="postcode"
            value={location?.postcode}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
          <EditField
            label="City"
            name="city"
            value={location?.city}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
        </LongTwoColumn>
        <LongTwoColumn>
          <EditField
            label="Country"
            name="country"
            value={location?.country}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
          <EditField
            label="State"
            name="state"
            value={location?.state}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
        </LongTwoColumn>
        <CustomColumns tabletNumCol={1} desktopNumCol={1}>
          <EditField
            label="E-mail"
            name="email"
            value={email}
            register={register}
            editing={editing}
            validation={{ required: true }}
          />
        </CustomColumns>
      </form>
    </Wrapper>
  )
}

UserDataForm.propTypes = {
  user: PropTypes.object.isRequired,
  editing: PropTypes.bool,
}

UserDataForm.defaultProps = {
  editing: false,
}

const mapStateToProps = (state) => ({
  user: state.session.user,
})

const UserDataFormConnected = connect(mapStateToProps)(UserDataForm)
export default memo(UserDataFormConnected)
