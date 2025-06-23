import React from 'react';
import 'host_app/i18n';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './Search-form.css'


const SearchForm = ({ onSendData }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (onSendData) {
      onSendData(data); 
    }
  };

  return (
    <div className="login-data" style={{ margin: 'auto' }}>
        <h3>{t('Processing_Requests')}</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
            <div className='col-md-6'>
                <Form.Group controlId="formName" style={{ marginTop: '25px' }}>
                    <Form.Label>{t('firstName')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('firstName')}
                        {...register('firstName', { required: t('field_required') })}
                    />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                </Form.Group>
            </div> <br /><br />
            <div className='col-md-6'>
                <Form.Group controlId="formLastName" style={{ marginTop: '25px' }}>
                    <Form.Label>{t('lastName')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('lastName')}
                        {...register('lastName', { required: t('field_required') })}
                    />
                    {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                </Form.Group>
            </div><br /><br />
            <div className='col-md-6'>
                <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                    <Form.Label>{t('Age')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('Age')}
                        {...register('Age', { required: t('field_required') })}
                    />
                    {errors.Age && <span style={{ color: 'red' }}>{errors.Age.message}</span>}
                </Form.Group>
            </div><br /><br />
            <div className='col-md-6'>
                <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                    <Form.Label>{t('Role')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('Role')}
                        {...register('Role', { required: t('field_required') })}
                    />
                    {errors.Role && <span style={{ color: 'red' }}>{errors.Role.message}</span>}
                </Form.Group>
            </div>
              <div className='col-md-6'>
                <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                    <Form.Label>{t('Role')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('Role')}
                        {...register('Role', { required: t('field_required') })}
                    />
                    {errors.Role && <span style={{ color: 'red' }}>{errors.Role.message}</span>}
                </Form.Group>
            </div>
              <div className='col-md-6'>
                <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                    <Form.Label>{t('Role')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('Role')}
                        {...register('Role', { required: t('field_required') })}
                    />
                    {errors.Role && <span style={{ color: 'red' }}>{errors.Role.message}</span>}
                </Form.Group>
            </div>
        </div>
        <br /><br />
        <h3>{t('Processing_Requests')}</h3>

        <div className='iener'>
           <div className='row'>
                <div className='col-md-6'>
                    <Form.Group controlId="formName" style={{ marginTop: '25px' }}>
                        <Form.Label>{t('firstName')}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('firstName')}
                            {...register('firstName', { required: t('field_required') })}
                        />
                        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                    </Form.Group>
                </div> <br /><br />
                <div className='col-md-6'>
                    <Form.Group controlId="formLastName" style={{ marginTop: '25px' }}>
                        <Form.Label>{t('lastName')}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('lastName')}
                            {...register('lastName', { required: t('field_required') })}
                        />
                        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                    </Form.Group>
                </div><br /><br />
                <div className='col-md-6'>
                    <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                        <Form.Label>{t('Age')}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('Age')}
                            {...register('Age', { required: t('field_required') })}
                        />
                        {errors.Age && <span style={{ color: 'red' }}>{errors.Age.message}</span>}
                    </Form.Group>
                </div><br /><br />
                <div className='col-md-6'>
                    <Form.Group controlId="formRole" style={{ marginTop: '25px' }}>
                        <Form.Label>{t('Role')}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('Role')}
                            {...register('Role', { required: t('field_required') })}
                        />
                        {errors.Role && <span style={{ color: 'red' }}>{errors.Role.message}</span>}
                    </Form.Group>
                </div>
            </div>  
        </div>
       
        <Button type="submit" variant="primary" className='add_btn' style={{ marginTop: '25px' }}>
          {t('EngineeringDepartment.Search')}
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;