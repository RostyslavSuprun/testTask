import styles from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={styles.label}>
      Find Products by name
      <input
        type="text"
        name="filter"
        className={styles.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Apple, Shriracha Sauce, Wine Stump Jump Shiraz d'Arenberg"
        required
      />
    </label>
  );
}
