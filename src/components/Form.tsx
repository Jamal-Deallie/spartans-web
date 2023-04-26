import { Input } from '@/components/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import * as yup from 'yup';
import styles from '@/styles/components/Form.module.scss';

type FormProps = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormProps> = data => {
    fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <form
      method='post'
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}>
      <div>
        <div className={styles.input}>
          <Input type='text' placeholder='Name' {...register('name')} />
        </div>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div>
        <div className={styles.input}>
          <Input
            type='text'
            placeholder='Phone Number'
            {...register('phoneNumber')}
          />
        </div>
        {errors.phoneNumber && (
          <p className={styles.error}>{errors.phoneNumber.message}</p>
        )}
      </div>
      <div>
        <div className={styles.input}>
          <Input type='email' placeholder='Email' {...register('email')} />
        </div>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div>
        <div className={styles.input}>
          <textarea placeholder='Message' {...register('message')} />
        </div>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>
      <input
        type='button'
        value='Submit'
        className={cn(styles['btn'], 'gradient-bg')}
      />
    </form>
  );
}
