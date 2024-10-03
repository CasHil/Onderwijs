import matplotlib.pyplot as plt
import matplotlib.patches as patches


def draw_classroom():
    fig, ax = plt.subplots(figsize=(12, 6))

    # Define classroom dimensions
    width, height = 12, 6

    # Draw the classroom outline
    classroom = patches.Rectangle(
        (0, 0), width, height, linewidth=2, edgecolor='black', facecolor='lightgrey')
    ax.add_patch(classroom)

    # Draw the teacher's area at the front
    teacher_area = patches.Rectangle(
        (0, height - 1), width, 1, linewidth=1, edgecolor='black', facecolor='lightblue')
    ax.add_patch(teacher_area)
    ax.text(0.5 * width, height - 0.5, 'Teacher',
            horizontalalignment='center', verticalalignment='center')

    # Draw the large table on the right side
    table_right = patches.Rectangle(
        (8, 0), 3, height, linewidth=1, edgecolor='black', facecolor='lightyellow')
    ax.add_patch(table_right)
    ax.text(9.5, height / 2, 'Table Right', horizontalalignment='center',
            verticalalignment='center', rotation=90)

    # Draw computers on the right side
    for i in range(6):
        computer = patches.Rectangle(
            (8.5, height - 1 - i * 0.6), 1, 0.5, linewidth=1, edgecolor='black', facecolor='lightcoral')
        ax.add_patch(computer)
        ax.text(8.5 + 0.5, height - 1 - i * 0.6 + 0.25,
                f'PC {i + 1}', horizontalalignment='center', verticalalignment='center')

    # Draw the two tables in the middle
    table_middle1 = patches.Rectangle(
        (2, 0), 4, height, linewidth=1, edgecolor='black', facecolor='lightyellow')
    table_middle2 = patches.Rectangle(
        (6, 0), 4, height, linewidth=1, edgecolor='black', facecolor='lightyellow')
    ax.add_patch(table_middle1)
    ax.add_patch(table_middle2)
    ax.text(4, height / 2, 'Table Middle 1', horizontalalignment='center',
            verticalalignment='center', rotation=90)
    ax.text(8, height / 2, 'Table Middle 2', horizontalalignment='center',
            verticalalignment='center', rotation=90)

    # Draw computers on the tables in the middle
    for i in range(8):
        x_left = 2.5
        y_left = height - 1 - (i % 4) * 0.6
        computer_left = patches.Rectangle(
            (x_left, y_left), 1, 0.5, linewidth=1, edgecolor='black', facecolor='lightcoral')
        ax.add_patch(computer_left)
        ax.text(x_left + 0.5, y_left + 0.25,
                f'PC {i + 7}', horizontalalignment='center', verticalalignment='center')

        x_right = 6.5
        y_right = height - 1 - (i % 4) * 0.6
        computer_right = patches.Rectangle(
            (x_right, y_right), 1, 0.5, linewidth=1, edgecolor='black', facecolor='lightcoral')
        ax.add_patch(computer_right)
        ax.text(x_right + 0.5, y_right + 0.25,
                f'PC {i + 15}', horizontalalignment='center', verticalalignment='center')

    # Draw the shorter table on the left side
    table_left = patches.Rectangle(
        (0, 0), 2, height, linewidth=1, edgecolor='black', facecolor='lightyellow')
    ax.add_patch(table_left)
    ax.text(1, height / 2, 'Table Left', horizontalalignment='center',
            verticalalignment='center', rotation=90)

    # Draw computers on the shorter table
    for i in range(6):
        computer = patches.Rectangle(
            (0.5, height - 1 - i * 0.6), 1, 0.5, linewidth=1, edgecolor='black', facecolor='lightcoral')
        ax.add_patch(computer)
        ax.text(0.5 + 0.5, height - 1 - i * 0.6 + 0.25,
                f'PC {i + 23}', horizontalalignment='center', verticalalignment='center')

    # Draw windows at the back
    windows = patches.Rectangle(
        (0, 0), width, 1, linewidth=1, edgecolor='black', facecolor='lightcyan')
    ax.add_patch(windows)
    ax.text(0.5 * width, 0.5, 'Windows',
            horizontalalignment='center', verticalalignment='center')

    # Set limits and labels
    ax.set_xlim(0, width)
    ax.set_ylim(0, height)
    ax.set_aspect('equal')
    ax.axis('off')

    plt.title('Classroom Floor Plan')
    plt.show()


# Run the function to draw the updated classroom
draw_classroom()
