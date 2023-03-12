import Colors from '../constants/Colors'

export default function TabBarIcon () {
    const { Icon, name, focused } = props;
    return (
        <Icon
          name={name}
          size={25}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}